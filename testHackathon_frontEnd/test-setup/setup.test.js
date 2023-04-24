// import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {vi, beforeAll, describe} from "vitest";
// import 'vi-fetch/setup'
import {prepareFetch, createMockApi} from "vi-fetch";
import Modal from '../src/components/Modal/Modal'
// import React from "react";

// describe('modal test',()=>{
    it('fill test', ()=>{
        render(<Modal/>);

        const textElement = screen.getByText('Имя');
        expect(textElement).toBeInDocument();
    })
// })