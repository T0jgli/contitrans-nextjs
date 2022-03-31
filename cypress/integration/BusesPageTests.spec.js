/// <reference types="cypress" />
context("BusesPage integration testing", function () {
    before(() => {
        cy.visit(`http://localhost:8081/buses`);
        cy.get(".acceptcookies").click();
    });

    describe("Info component tests", () => {
        it("should render the info component", () => {
            cy.get(".busesothers").should("be.visible");
        });
    });

    describe("Buses cards component tests", () => {
        it("should has render the card decks and the cards", () => {
            if (localStorage.getItem("defaultBusView")) {
                cy.get("#buses-btngroup").children().eq(0).click();
            }
            cy.get("#buses-cards").find(".card-deck").should("be.visible");
            cy.get(".card-deck").find(".card.kartya").should("be.visible");
        });

        it("should have open and close the cards on click", () => {
            cy.get("#buses-cards")
                .find(".card-deck")
                .each((e) => {
                    cy.wrap(e.children(".card")).each((c) => {
                        cy.wrap(c).click();
                        cy.wrap(c).children(".card-body").should("not.have.class", "close");
                        cy.wrap(c).children(".card-body").children(".card-text").children("a").should("have.attr", "href");
                        cy.wrap(c).click();
                        cy.wrap(c).children(".card-body").should("have.class", "close");
                    });
                });
        });
    });
    describe("Museum cards component tests", () => {
        it("should has open the museum cards when clicking the button", () => {
            cy.get("#buses-container").find(".btn-dark.btn-outline-dark").first().scrollIntoView().click();
            cy.get("#buses-btngroup").should("not.exist");
            cy.get("#buses-cards").should("not.exist");
            cy.get("#muzeum-cards").should("be.exist");
        });

        it("should has render the card decks and the cards", () => {
            cy.get("#muzeum-cards").find(".card-deck").should("be.visible");
            cy.get(".card-deck").find(".card.kartya").should("be.visible");
        });

        it("should have open and close the cards on click", () => {
            cy.get("#muzeum-cards")
                .find(".card-deck")
                .each((e) => {
                    cy.wrap(e.children(".card")).each((c) => {
                        cy.wrap(c).click();
                        cy.wrap(c).children(".card-body").should("not.have.class", "close");
                        cy.wrap(c).click();
                        cy.wrap(c).children(".card-body").should("have.class", "close");
                    });
                });
        });

        it("should has closed the museum cards when clicking the button again", () => {
            cy.get("#buses-container").find(".btn-dark.btn-outline-dark").first().scrollIntoView().click();
            cy.get("#muzeum-cards").should("not.be.exist");
            cy.get("#buses-cards").should("be.exist");
            cy.get("#buses-btngroup").should("be.exist");
        });
    });

    describe("Buses container component tests", () => {
        it("should render the container and the buttons", () => {
            cy.get("#buses-container").scrollIntoView().should("be.visible");
            cy.get("#buses-container").find("h3").first().should("be.visible");
            cy.get("#buses-btngroup").should("be.visible");
        });

        it("should has working switch buttons", () => {
            cy.get("#buses-btngroup").children().eq(1).click();
            cy.get("#buses-table").should("be.visible");
            cy.get("#buses-cards").should("not.exist");
        });
    });

    describe("Buses table component tests", () => {
        it("should render the table", () => {
            cy.get("#buses-table").find("thead").should("be.visible");
            cy.get("#buses-table")
                .find("tbody")
                .should("be.visible")
                .each((e) => {
                    cy.wrap(e)
                        .children("tr")
                        .each((tr) => {
                            cy.wrap(tr).children("td").eq(1).find(".MuiButtonBase-root").should("be.exist");
                        });
                });
            cy.get("#buses-btngroup").children().eq(0).click();
        });
    });

    describe("Specified bus component tests", () => {
        it("should go to a specified truck page", () => {
            const cardLength = Cypress.$("#buses-cards .card.muzeumbusz.kartya").length;
            const randomNumber = Math.floor(Math.random() * (cardLength - 0) + 0);
            cy.get("#buses-cards").find(".card.muzeumbusz.kartya").eq(randomNumber).click().find("button").click();
        });

        it("should has render the container content", () => {
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

        it("should has render the bottom buttons", () => {
            cy.get(".onebus__container").children().last().prev().find("button").should("be.exist");
            cy.get(".onebus__container").children().last().find("button").should("be.exist");
        });

        it("should has working back button", () => {
            cy.get(".onebus__container").prev().find("button").click();
            cy.get(".onebus__container").should("not.exist");
            cy.get("#buses-cards").should("be.exist");
        });
    });
});
