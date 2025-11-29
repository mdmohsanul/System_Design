import React from "react";
import Greeting from "../components/Greeting";
import {describe,it,expect} from "vitest"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom/vitest"

describe("Greeting" , () => {
    it("describe a default Greeting", () =>{
        render(<Greeting/>)
        expect(screen.getByText("Hello, World!")).toBeInTheDocument()
    })

    it("describe a props greeting", () => {
        render(<Greeting name={"John"}/>)
        expect(screen.getByText(`Hello, John!`)).toBeInTheDocument()
    })
}
)