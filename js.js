const validation = new JustValidate("#contact");

validation
    .addField("#name", [
        {
            rule: "required"
        }
    ])
    .addField("#message", [
        {
            rule: "required"
        }
    ])
