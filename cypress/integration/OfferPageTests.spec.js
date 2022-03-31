/// <reference types="cypress" />

context("OfferPage integration testing", function () {
    before(() => {
        cy.visit(`http://localhost:8081/offer`);
        cy.get(".acceptcookies").click();
    });

    describe("Contact component tests", () => {
        it("should be visible", () => {
            cy.get(".width-75.row.mx-auto.pt-5 ").scrollIntoView().should("be.visible");
        });

        it("should has working input fields", () => {
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            cy.get(".card-body").children("form").find("input[name='name']").clear().type("Cypress IO").should("have.value", "Cypress IO").clear();
            cy.get(".card-body").children("form").find("input[name='phone']").clear().type("464645").should("have.value", "464645").clear();
            cy.get(".card-body")
                .children("form")
                .find("input[name='email']")
                .clear()
                .type("cypress@cypress.io")
                .should("have.value", "cypress@cypress.io")
                .clear();
            cy.get(".card-body")
                .children("form")
                .find("input[name='uticel']")
                .clear()
                .type("Successful integration test")
                .should("have.value", "Successful integration test")
                .clear();
            cy.get(".card-body").children("form").find("input[name='koltseg']").clear().type("Not much").should("have.value", "Not much").clear();
            cy.get(".card-body")
                .children("form")
                .find("input[name='indulasdate']")
                .clear()
                .type(today.toISOString().split("T")[0])
                .should("have.value", today.toISOString().split("T")[0])
                .clear();
            cy.get(".card-body")
                .children("form")
                .find("input[name='erkezesdate']")
                .clear()
                .type(tomorrow.toISOString().split("T")[0])
                .should("have.value", tomorrow.toISOString().split("T")[0])
                .clear();
            cy.get(".card-body")
                .children("form")
                .find("select[name='ferohely']")
                .select("49-51")
                .should("have.value", "49-51")
                .select("def")
                .should("have.value", "def");

            cy.get(".card-body")
                .children("form")
                .find("textarea[name='desc']")
                .clear()
                .type("Successfully tested these input fields")
                .should("have.value", "Successfully tested these input fields")
                .clear()
                .blur();

            cy.get(".card-body")
                .children("form")
                .find(".MuiFormGroup-root")
                .first()
                .find("input[type='checkbox']")
                .check()
                .should("be.checked")
                .uncheck()
                .should("not.be.checked");
            cy.get(".card-body")
                .children("form")
                .find(".MuiFormGroup-root")
                .last()
                .find("input[type='checkbox']")
                .check()
                .should("be.checked")
                .uncheck()
                .should("not.be.checked");
        });
    });

    describe("Gallery component test", () => {
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
});
