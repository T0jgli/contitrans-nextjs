/// <reference types="cypress" />

context("Global Components integration testing", function () {
    before(() => {
        const pathnames = ["/", "/offer", "/buses", "/trucks"];
        cy.visit(`http://localhost:8081${pathnames[Math.floor(Math.random() * (3 - 0) + 0)]}`);
    });

    describe("Cookies tests", function () {
        let enabledCookiesStorage;

        beforeEach(() => {
            enabledCookiesStorage = localStorage.getItem("EnableCookies");
        });

        it("should render the cookies alert based on local storage", () => {
            cy.wait(750);
            if (!enabledCookiesStorage) cy.get(".cookiealert").should("be.visible");
            else cy.get(".cookiealert").should("not.be.visible");
        });

        it("should disappear when clicking the accept button", () => {
            cy.get(".acceptcookies").click();
            cy.get(".cookiealert").should("not.have.class", "show").should("not.be.visible");
        });
    });

    describe("Navbar tests", function () {
        it("should render the navbar", () => {
            cy.get("nav").should("be.visible");
            cy.get("aside").should("have.class", "closed").should("not.be.visible");
        });

        it("should render the language icons", () => {
            cy.get("#huicon").should("be.visible");
            cy.get("#engicon").should("be.visible");
        });

        it("should render the tickets button", () => {
            cy.get(".navbar__btn").should("be.visible");
        });

        it("should fade when scrolling", () => {
            cy.scrollTo(0, 75).get("nav").should("have.class", "topnav");
        });

        it("should contain the mobile icon on mobile", () => {
            cy.get(".navbar__mobileicon").should("not.be.visible");
            cy.viewport(550, 750);
            cy.get(".navbar__mobileicon").should("be.visible");
        });

        it("should open and close the navbar on mobile", () => {
            cy.viewport(550, 750);
            cy.get(".navbar__mobileicon").click();
            const aside = cy.get("aside");
            aside.should("have.class", "open").should("be.visible");
            aside.find(".sidebar__icon").click();
            cy.get("aside").should("have.class", "closed").should("not.be.visible");
        });
    });

    describe("Carousel tests", () => {
        let activeItemNumber;
        let carousel;

        before(() => {
            carousel = cy.get(".carousel").eq(0);
        });

        beforeEach(() => {
            activeItemNumber = getActiveItem();
        });

        function properCarouselItem(number) {
            cy.get(".carousel-item").eq(number).should("have.class", "active");
            cy.get(".carousel-indicators").children().eq(number).should("have.class", "active");
        }

        function getActiveItem() {
            let activeNumber = 0;
            for (let i = 0; i < 3; i++) {
                if (Cypress.$(".carousel-item").eq(i).hasClass("active")) {
                    activeNumber = i;
                    break;
                }
            }
            return activeNumber;
        }

        it("should render the carousel", () => {
            carousel.should("be.visible");
        });

        it("should change the height based on pathname", () => {
            if (window.location.pathname !== "/") {
                carousel.should("have.class", "carouselup");
            } else {
                carousel.should("have.class", "headerclip");
            }
        });

        it("should go to the next when clicking next button", () => {
            let clickedElementNumber;
            cy.get(".carousel-control-next").click();

            if (activeItemNumber === 2) clickedElementNumber = 0;
            else clickedElementNumber = activeItemNumber + 1;

            properCarouselItem(clickedElementNumber);
        });
        it("should go to the previous when clicking previous button", () => {
            cy.get(".carousel-control-prev").click();

            if (activeItemNumber === 0) clickedElementNumber = 2;
            else clickedElementNumber = activeItemNumber - 1;

            properCarouselItem(clickedElementNumber);
        });
        it("should go to the specified item when clicking to the bottom buttons", () => {
            const randomNumber = Math.floor(Math.random() * (2 - 0) + 0);
            cy.get(".carousel-indicators").children().eq(randomNumber).click();
            properCarouselItem(randomNumber);
        });
    });

    describe("Footer tests", () => {
        it("should render the footer", () => {
            cy.get("footer").should("be.visible");
        });

        it("should render the map", () => {
            cy.get(".map").children("iframe").scrollIntoView().should("be.visible");
        });

        it("should scroll to the top when clicking the scrolltopbtn", () => {
            cy.scrollTo(0, 768);
            cy.get("#scrolltopbutton").click();
            cy.wait(1000);
            cy.window().then(($window) => {
                expect($window.scrollY, 0);
            });
        });
        it("should contain the copyright", () => {
            const footerCopyright = cy.get(".footer-copyright");
            footerCopyright.should("contain.text", "© 2021 Copyright:");
            footerCopyright.children("span").children("span").eq(0).should("contain.text", "Contibus");
            cy.get(".footer-copyright").children("span").children("a").should("contain.text", "tojglee");
        });
    });

    describe("Lost items modal tests", () => {
        it("should open the lost items modal when clicking it", () => {
            cy.get("#footer-links").children("p").eq(0).click();
            cy.get(".cascading-modal").should("be.visible");
        });

        it("should has working input fields", () => {
            cy.get(".modal-body").find("input[name='name']").clear().type("Cypress IO").should("have.value", "Cypress IO").clear();
            cy.get(".modal-body").find("input[name='date']").clear().type("Yesterday").should("have.value", "Yesterday").clear();
            cy.get(".modal-body")
                .find("input[name='bus']")
                .clear()
                .type("Integration testing bus")
                .should("have.value", "Integration testing bus")
                .clear();
            cy.get(".modal-body")
                .find("input[name='desc']")
                .clear()
                .type("My successful integration test")
                .should("have.value", "My successful integration test")
                .clear();
            cy.get(".modal-body").find("input[name='phone']").clear().type("45647561").should("have.value", "45647561").clear();
            cy.get(".modal-body").find("input[name='email']").clear().type("cypress@cypress.io").should("have.value", "cypress@cypress.io").clear();

            cy.get(".modal-body")
                .find("textarea[name='comment']")
                .clear()
                .type("Successfully tested these input fields")
                .should("have.value", "Successfully tested these input fields")
                .clear()
                .blur();
            cy.get(".modal-body")
                .find(".MuiFormGroup-root")
                .first()
                .find("input[type='checkbox']")
                .check()
                .should("be.checked")
                .uncheck()
                .should("not.be.checked");
            cy.get(".modal-body")
                .find(".MuiFormGroup-root")
                .last()
                .find("input[type='checkbox']")
                .check()
                .should("be.checked")
                .uncheck()
                .should("not.be.checked");
        });

        it("should close when clicking the close button", () => {
            const randomNumber = Math.floor(Math.random());
            if (randomNumber === 1) {
                cy.get(".modal-header.rounded").children("button").click();
            } else {
                cy.get(".modal-content").children(".card").children(".card-footer").children("button").click();
            }
        });
    });
});
