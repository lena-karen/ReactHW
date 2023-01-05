import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import ChatForm from ".";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";

describe('testing ChatForm', () => {

    it('render AddChatForm', () => {
        render(<ChatForm />)
        expect(screen.queryByRole('textbox')).toBeInTheDocument()
    })

    it('form calls submit event', () => {
        const mockSubmit = jest.fn()

        render(<ChatForm submit = {mockSubmit}/>)
        userEvent.click(screen.getByText('Create new chat'))
        expect(mockSubmit).toHaveBeenCalled()
    })
    it('input matches snapshot', () => {
        const component = render(<ChatForm  />)
        expect(component).toMatchSnapshot()
    })
})