Hooks.once("init", () => {
    game.settings.register("token-ring-adjuster", "tiny", {
        name: "Tiny Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2.4 }),
        requiresReload: true
    });

    game.settings.register("token-ring-adjuster", "sm", {
        name: "Small Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2 }),
        requiresReload: true
    });

    game.settings.register("token-ring-adjuster", "med", {
        name: "Medium Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2.4 }),
        requiresReload: true
    });

    game.settings.register("token-ring-adjuster", "lg", {
        name: "Large Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2.4 }),
        requiresReload: true
    });

    game.settings.register("token-ring-adjuster", "huge", {
        name: "Huge Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2.4 }),
        requiresReload: true
    });

    game.settings.register("token-ring-adjuster", "grg", {
        name: "Gargantuan Token Scale",
        scope: "world",
        config: true,
        type: new foundry.data.fields.NumberField({ required: true, min: 0.2, max: 3, step: 0.1, initial: 2.4 }),
        requiresReload: true
    });

});

Hooks.on("preCreateActor", (document, data, options, userId) => {
    if (options.fromCompendium) {
        if (document.prototypeToken.ring.enabled) {
            let scale = game.settings.get("token-ring-adjuster", document.size);

            document.updateSource({
                prototypeToken: {
                    texture: {
                        scaleX: scale,
                        scaleY: scale
                    }
                }
            });
        }
    }
});