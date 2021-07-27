import {useContext} from "react"

describe ("Test", () => {
    
    beforeEach(() => {
        window.localStorage.setItem("authToken", "foo")
    })

    it("should render property dropdown", () => {
        cy.intercept("http://localhost:4000/api/houses", {
            body: [
                {"id":1 ,
                "address":"Test 1 address",
                "title":"Test 1 title",
                "image_url":"Test 1 image",
                "created_at":"Test 1 created",
                "updated_at":"Test 1 updated"},
                {"id":2,
                "address":"Test 2 address",
                "title":"Test 2 title",
                "image_url":"Test 2 image",
                "created_at":"Test 2 created",
                "updated_at":"Test 2 updated"},
                {"id":3,
                "address":"Test 3 address",
                "title":"Test 3 title",
                "image_url":"Test 3 image",
                "created_at":"Test 3 created",
                "updated_at":"Test 3 updated"},
                {"id":4,
                "address":"Test 4 address",
                "title":"Test 4 title",
                "image_url":"Test 4 image",
                "created_at":"Test 4 created",
                "updated_at":"Test 4 updated"}]
        })
        cy.visit("http://localhost:3000/create_account")
        cy.get(".formDiv").within(() => {
            cy.get('select').select("1")
            cy.get('option').should('have.length', 5)
            cy.get('option:nth-child(2)').contains("Test 1 title")
            cy.get('option:nth-child(3)').contains("Test 2 title")
            cy.get('option:nth-child(4)').contains("Test 3 title")
            cy.get('option:nth-child(5)').contains("Test 4 title")
        })  
    })

    it("should render property dropdown", () => {
        cy.visit("http://localhost:3000")
            cy.get('.nav-rectangle').within(() => {
                cy.get('.hamburger').click()
            })
            cy.get('.nav-links').contains('ul','HOME', 'CALENDAR', 'CREATE ACCOUNT', 'CREATE PROPERTY', 'ADMIN HOME')     
    })

    it("should take you to calendar page", () => {
        cy.visit("http://localhost:3000")
        cy.get('.nav-rectangle').within(() => {
            cy.get('.hamburger').click()
        })
        cy.get('.nav-links').within(() =>{
            cy.get('li:nth-child(2)').click()
            cy.url().should('eq', 'http://localhost:3000/calendar')
        })
    })

    it("should radio button be checked", () => {
        cy.visit('http://localhost:3000/create_account')
            cy.get(".formDiv").within(() => {
                cy.get(".radio-buttons")
                cy.get('input[type="radio"]').check('Tenant')
                cy.get('input[value="Tenant"]').should('be.checked')
                cy.get('input[type="radio"]').check('Property Manager')
                cy.get('input[value="Tenant"]').should('be.checked')
            })    
    })

    it("should get notification if account created", () => {
        cy.visit('http://localhost:3000/create_account')
            cy.get(".formDiv").within(() => {
                cy.get('input[type="radio"]').check('Tenant')
                cy.get('input[name=name]').type('Test')
                cy.get('input[name=email]').type('test@test.com')
                cy.get('input[name=password]').type('test')
                cy.get('input[name=phone_number]').type('044444444')
                cy.get('select').select("1")
                cy.get('option').should('have.length', 5)
                cy.get('option:nth-child(2)')
                cy.get('input[type=submit]').click()
                cy.on('window:alert', cy.stub().as('alert'))
            })
    })
})