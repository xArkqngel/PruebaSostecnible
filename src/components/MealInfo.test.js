import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import MealInfo from "./MealInfo"

const meal = {
    strMeal: "Beef and Mustard Pie",
    strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    idMeal: "52874"
    }

test("renders MealInfo component", () => {
    const component = render(<MealInfo meal={meal} />)

    expect(component.container).toHaveTextContent('Beef and Mustard Pie')
}
)

test ("renders MealInfo component, not pass", () => {

    const component = render(<MealInfo meal={meal} />)

    expect(component.container).not.toHaveTextContent('Beef and Oister Pie')
}
)
