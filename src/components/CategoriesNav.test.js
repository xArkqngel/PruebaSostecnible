import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import CategoriesNav from "./CategoriesNav"

test("renders CategoriesNav component", () => {
    const categories = [
        {
            idCategory: '1',
            strCategory: 'Beef',
            strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
            strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.'
        }
    ]

    const component = render(<CategoriesNav categories={categories} />)

    expect(component.container).toHaveTextContent('Beef')
}
)
