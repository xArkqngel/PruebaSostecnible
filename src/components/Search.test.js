import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Search from "./Search";
import { getMealsByName } from "../services/mealsAPI";

jest.mock("../services/mealsAPI", () => ({
    getMealsByName: jest.fn(),
}));

describe("Search component", () => {
    it("calls getMealsByName function with the search value", async () => {
        const mockMeals = [
            { idMeal: "1", strMeal: "Meal 1" },
            { idMeal: "2", strMeal: "Meal 2" },
        ];
        getMealsByName.mockResolvedValue(mockMeals);
        
        render(<Search />);
        
        const searchInput = screen.getByPlaceholderText("Buscar");
        fireEvent.change(searchInput, { target: { value: "chicken" } });

        await waitFor(() => {
            expect(getMealsByName).toHaveBeenCalledTimes(1);
            expect(getMealsByName).toHaveBeenCalledWith("chicken");
        });

        await waitFor(() => {
            expect(screen.getByText("Meal 1")).toBeInTheDocument();
            expect(screen.getByText("Meal 2")).toBeInTheDocument();
        });
    });

    it("displays '404' when no meals are found", async () => {
        const mockEmptyMeals = [];
        getMealsByName.mockResolvedValue(mockEmptyMeals);
        
        render(<Search />);
        
        const searchInput = screen.getByPlaceholderText("Buscar");
        fireEvent.change(searchInput, { target: { value: "nonexistent" } });

        await waitFor(() => {
            expect(getMealsByName).toHaveBeenCalledTimes(1);
            expect(getMealsByName).toHaveBeenCalledWith("nonexistent");
        });

        await waitFor(() => {
            expect(screen.getByText("404")).toBeInTheDocument();
        });
    });

    it("hides the search results when search is empty", async () => {
        render(<Search />);
        
        const searchInput = screen.getByPlaceholderText("Buscar");
        fireEvent.change(searchInput, { target: { value: "chicken" } });

        await waitFor(() => {
            expect(screen.getByText("Meal 1")).toBeInTheDocument();
            expect(screen.getByText("Meal 2")).toBeInTheDocument();
        });

        fireEvent.change(searchInput, { target: { value: "" } });

        await waitFor(() => {
            expect(screen.queryByText("Meal 1")).not.toBeInTheDocument();
            expect(screen.queryByText("Meal 2")).not.toBeInTheDocument();
        });
    });
});
