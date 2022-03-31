/// <reference types="cypress" />

context("HomePage integration testing", function () {
    before(() => {
        cy.visit(`http://localhost:8081`);
        cy.get(".acceptcookies").click();
    });

    describe("Info components tests", () => {
        it("should render the main image", () => {
            cy.get("img[alt='Contibus logo']").scrollIntoView().should("be.visible");
        });
    });

    describe("Gallery components tests", () => {
        let activeItemNumber;

        before(() => {
            activeItemNumber = getActiveItem();
        });

        function properCarouselItem(number) {
            cy.get("#gallerycontainer").find(".carousel-item").eq(number).should("have.class", "active");
        }

        function getActiveItem() {
            let activeNumber = 0;
            for (let i = 0; i < 3; i++) {
                if (Cypress.$("#gallerycontainer").find(".carousel-item").eq(i).hasClass("active")) {
                    activeNumber = i;
                    break;
                }
            }
            return activeNumber;
        }

        it("should has a gallery", () => {
            cy.get("#gallerycontainer").should("be.visible");
        });

        it("should go to the next when clicking the next button", () => {
            let clickedElementNumber;

            cy.get("#gallerycontainer").find(".controls-top").children("a").eq(1).click();
            if (activeItemNumber === 2) clickedElementNumber = 0;
            else clickedElementNumber = activeItemNumber + 1;

            properCarouselItem(clickedElementNumber);
        });
        it("should go to the previous when clicking the previous button", () => {
            let clickedElementNumber;

            cy.get("#gallerycontainer").find(".controls-top").children("a").eq(0).click();

            if (activeItemNumber === 0) clickedElementNumber = 2;
            else clickedElementNumber = activeItemNumber - 1;

            properCarouselItem(activeItemNumber - 1);
        });

        it("should open the lightbox when clicking the image", () => {
            const randomImage = Math.floor(Math.random() * (3 - 0) + 0);
            cy.get("#gallerycontainer").find(".carousel-item.active[style='left: 0px;']").children().eq(randomImage).click();
            cy.get(".ril-outer.ril__outer").should("be.visible");
            cy.get(".ril-toolbar__item.ril__toolbarItem").last().click();
        });
    });

    describe("Our feedbacks component tests", () => {
        function properCarouselItem(number) {
            cy.get(".testimonials").find(".carousel-item").eq(number).should("have.class", "active");
        }

        it("should go to proper element when clicking the bottom buttons", () => {
            const randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
            cy.get(".testimonials").find(".carousel-indicators").children().eq(randomNumber).click();
            properCarouselItem(randomNumber);
        });
    });

    describe("Streak component tests", () => {
        it("should be visible", () => {
            cy.get(".streak.streak-photo").should("be.visible");
        });
    });

    describe("Card component tests", () => {
        it("should be visible", () => {
            cy.get(".services__container").should("be.visible");
        });

        it("should open and close the modals", () => {
            for (let i = 1; i < 6; i++) {
                cy.get(".services__wrapper").find(".services__card.rounded.d-flex").eq(i).children(".view").click();
                const randomNumber = Math.floor(Math.random());
                cy.get(".cascading-modal").should("be.visible");

                if (randomNumber === 1) {
                    cy.get(".modal-header.rounded").children("button").click();
                } else {
                    cy.get(".modal-content").children(".card").children(".card-footer").children("button").click();
                }

                cy.get(".cascading-modal").should("not.exist");
            }
        });
    });

    describe("Contact component tests", () => {
        it("should be visible", () => {
            cy.get(".contact__div ").scrollIntoView().should("be.visible");
            cy.get(".contact__div ").find(".card-body").should("be.visible");
        });

        it("should has working input fields", () => {
            cy.get("input[name='Name']").clear().type("Cypress IO").should("have.value", "Cypress IO").clear();
            cy.get("input[name='Email']").clear().type("cypress@cypress.io").should("have.value", "cypress@cypress.io").clear();
            cy.get("input[name='Subject']").clear().type("Integration testing").should("have.value", "Integration testing").clear();
            cy.get("textarea[name='Message']")
                .clear()
                .type("Successfully tested these input fields")
                .should("have.value", "Successfully tested these input fields")
                .clear()
                .blur();
        });
    });
});
