/** @odoo-module */

export class Branding extends owl.Component {
    setup() {
        onWillStart(async () => {
            console.log('hello');
            const styleElement = document.createElement("style");
            styleElement.textContent = `
              .o_main_navbar,
              .btn-primary {
                background-color: #060734;
                border-bottom: 1px solid #060734;
              }
      
              .text-primary {
                color: #060734 !important;
              }
            `;

            this.env.head.appendChild(styleElement);

            // Your other onWillStart logic goes here
        });
    }
}
Branding.template = "odoo_rebranding.Template"
