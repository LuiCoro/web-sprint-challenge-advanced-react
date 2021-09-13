import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />)
  const header = screen.queryByText(/Checkout Form/i)
  expect(header).toBeInTheDocument()
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>)
  const firstNameInput = screen.queryByLabelText(/first name:/i)
  userEvent.type(firstNameInput, 'Sherlock')
  const lastNameInput = screen.queryByLabelText(/last name:/i)
  userEvent.type(lastNameInput, 'Holmes')
  const addressInput = screen.queryByLabelText(/address:/i)
  userEvent.type(addressInput, '221B Baker St.')
  const cityInput = screen.queryByLabelText(/city:/i)
  userEvent.type(cityInput, 'Westminster')
  const stateInput = screen.queryByLabelText(/state:/i)
  userEvent.type(stateInput, 'UK')
  const zipCodeInput = screen.queryByLabelText(/zip:/i)
  userEvent.type(zipCodeInput, 'SW1A')
  const checkoutBTN = screen.getByRole('button')
  userEvent.click(checkoutBTN)
  
  const successMessage = await screen.getByTestId('successMessage')
  expect(successMessage).toBeInTheDocument()
});
