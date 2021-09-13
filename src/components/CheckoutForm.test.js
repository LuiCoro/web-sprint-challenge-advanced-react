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

test("shows success message on submit with form details",  () => {
  render(<CheckoutForm/>)
  const firstNameInput = screen.queryByLabelText(/first name:/i)
  userEvent.type(firstNameInput, 'OMi')
  const lastNameInput = screen.queryByLabelText(/last name:/i)
  userEvent.type(lastNameInput, 'space')
  const addressInput = screen.queryByLabelText(/address:/i)
  userEvent.type(addressInput, 'National Space Station')
  const cityInput = screen.queryByLabelText(/city:/i)
  userEvent.type(cityInput, 'SPACE')
  const stateInput = screen.queryByLabelText(/state:/i)
  userEvent.type(stateInput, 'CA')
  const zipCodeInput = screen.queryByLabelText(/zip:/i)
  userEvent.type(zipCodeInput, 'SP4C')
  const checkoutBTN = screen.getByRole('button')
  userEvent.click(checkoutBTN)
  
  const successMessage = screen.getByTestId('successMessage')
  expect(successMessage).toBeInTheDocument()
});
