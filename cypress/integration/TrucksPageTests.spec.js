/// <reference types="cypress" />
context("TrucksPage integration testing", function () {
    before(() => {
        cy.visit(`http://localhost:8081/trucks`);
        cy.get(".acceptcookies").click();
    });

    describe("Info component tests", () => {
        it("should render the info component", () => {
            cy.get(".busesothers").should("be.visible");
        });
    });

    describe("Trucks cards component tests", () => {
        it("should has render the card decks and the cards", () => {
            cy.get("#trucks-container").find(".card-deck").should("be.visible");
            cy.get(".card-deck").find(".card.kartya").should("be.visible");
        });

        it("should has open and close the cards on click", () => {
            cy.get("#trucks-container")
                .find(".card-deck")
                .each((e) => {
                    cy.wrap(e.children(".card")).each((c) => {
                        cy.wrap(c).scrollIntoView().click();
                        cy.wrap(c).children(".card-body").should("not.have.class", "close");
                        cy.wrap(c).children(".card-body").children(".card-text").children("a").should("have.attr", "href");
                        cy.wrap(c).click();
                        cy.wrap(c).children(".card-body").should("have.class", "close");
                    });
                });
        });

        it("should go to a specified truck page", () => {
            const cardLength = Cypress.$("#trucks-container .card.muzeumbusz.kartya").length;
            const randomNumber = Math.floor(Math.random() * (cardLength - 0) + 0);
            cy.get("#trucks-container").find(".card.muzeumbusz.kartya").eq(randomNumber).click().find("button").click();
        });
    });

    describe("Specified truck page test", () => {
        it("should has render the content", () => {
            cy.get(".onebus__container").should("be.visible");
        });

        it("should has working images", () => {
            cy.get(".onebus__container").children(".row").find("img").should("be.visible");
            const photosLength = Cypress.$(".onebus__container .otherpictures img").length;
            const randomNumber = Math.floor(Math.random() * (photosLength - 0) + 0);
            const thisPictureSrc = Cypress.$(".onebus__container .otherpictures img").eq(randomNumber).attr("src");
            cy.get(".onebus__container").find(".otherpictures").find("img").eq(randomNumber).click();
            cy.get(".onebus__container").children(".row").find("img").should("have.attr", "src", thisPictureSrc);
        });

        it("should has working lightbox", () => {
            cy.get(".onebus__container").children(".row").find("img").eq(0).click();
            cy.get(".ril-outer.ril__outer").should("be.visible");
            cy.get(".ril-toolbar__item.ril__toolbarItem").last().click();
        });

        it("should has working offer button", () => {
            cy.get(".onebus__container").children().last().find("button").click();
            cy.get(".onebus__container").children("form").should("be.visible");
        });

        it("should has working input fields", () => {
            cy.get(".onebus__container")
                .children("form")
                .find("input[name='Name']")
                .clear()
                .type("Cypress IO")
                .should("have.value", "Cypress IO")
                .clear();
            cy.get(".onebus__container")
                .children("form")
                .find("input[name='Email']")
                .clear()
                .type("cypress@cypress.io")
                .should("have.value", "cypress@cypress.io")
                .clear();
            cy.get(".onebus__container")
                .children("form")
                .find("textarea[name='Message']")
                .clear()
                .type("Sucessfully tested these input fields")
                .should("have.value", "Sucessfully tested these input fields")
                .clear();
            cy.get(".onebus__container").children("form").prev().find("button").click();
            cy.get(".onebus__container").children("form").should("not.exist");
        });

        it("should has working back button", () => {
            cy.get(".onebus__container").prev().find("button").click();
            cy.get(".onebus__container").should("not.exist");
            cy.get("#trucks-container").should("be.exist");
        });
    });
});
