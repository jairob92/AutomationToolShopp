import { Page } from "@playwright/test";

export class CustomerRegistrationPage {
  private readonly firstNameInput;
  private readonly lastNameInput;
  private readonly dobInput;
  private readonly streetInput;
  private readonly postalCodeInput;
  private readonly stateInput;
  private readonly cityInput;
  private readonly countrySelect;
  private readonly phoneInput;
  private readonly emailInput;
  private readonly passwordInput;
  private readonly registerButton;

  constructor(page: Page) {
    this.firstNameInput = page.getByTestId("first-name");
    this.lastNameInput = page.getByTestId("last-name");
    this.dobInput = page.getByTestId("dob");
    this.streetInput = page.getByTestId("street");
    this.postalCodeInput = page.getByTestId("postal_code");
    this.stateInput = page.getByTestId("state");
    this.cityInput= page.getByTestId('city')
    this.countrySelect = page.getByTestId("country");
    this.phoneInput = page.getByTestId("phone");
    this.emailInput = page.getByTestId("email")
    this.passwordInput = page.getByTestId("password");
    this.registerButton = page.getByRole("button", { name: "Register" });
  }

  async typeFirstName(firs_name: string) {
    await this.firstNameInput.fill(firs_name);
  }
  async typeLastName(last_name: string) {
    await this.lastNameInput.fill(last_name);
  }
  async typeDob(dob: string) {
    await this.dobInput.fill(dob);
  }
  async typeStreet(street: string) {
    await this.streetInput.fill(street);
  }
  async typePostalCode(postal_code: string) {
    await this.postalCodeInput.fill(postal_code);
  }
  async typeCity(city:string){
    await this.cityInput.fill(city)
  }
  async typeState(state:string){
    await this.stateInput.fill(state)
  }
  async selectCountry(country:string){
    await this.countrySelect.selectOption(country)
  }
  async typePassword(password:string){
    await this.passwordInput.fill(password)
  }
  async typePhone(phone:string){
    await this.phoneInput.fill(phone)
  }

  async typeEmail(email:string){
    await this.emailInput.fill(email)
  }
  async clickOnRegisterButton(){
    await this.registerButton.click()
  }

}
