import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import MealCard from "./MealCard"

test("renders MealCard component", () => {
    const meal = {
        strMeal: "Beef and Mustard Pie",
        strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        idMeal: "52874"
        }

    const component = render(<MealCard meal={meal} />)

    expect(component.container).toHaveTextContent('Beef and Mustard Pie')
}
)
