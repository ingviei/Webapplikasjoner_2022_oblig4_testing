import {Todo} from "./Todo";
import {fireEvent, render, screen} from '@testing-library/react'
import App from "./App";
import { click } from "@testing-library/user-event/dist/click";

 it ("should return todo Item1 in paragraph", () => {
    render(<Todo />)

    const h1 = document.querySelector('h1')
    expect(h1).toHaveTextContent("Item1")
})

 it ("should return Item1 inside todoList when button is clicked", () => {
    render(<Todo />)

    const p = document.querySelector('p')
    fireEvent.click(screen.getByText("Legg til et gjøremål"))
    expect(p).toHaveTextContent("Item1")
})
 


