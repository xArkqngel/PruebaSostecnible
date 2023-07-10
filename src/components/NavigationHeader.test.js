import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import NavigationHeader from "./NavigationHeader"



test("renders NavigationHeader component", () => {
    const category = 'Beef'

    const component = render(<NavigationHeader category={category} />)

    expect(component.container).toHaveTextContent('Categoría Seleccionada: Beef')
}
)
