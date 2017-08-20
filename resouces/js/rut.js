

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("../inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        rut: {
            alias: "rutFormatAlias",
            rutFormat: [ {
		                mask: "#.###.###-#",
		                cc: "AC",
		                cd: "Ascension",
		                desc_en: "",
		                name_ru: "\u041e\u0441\u0442\u0440\u043e\u0432 \u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0438\u044f",
		                desc_ru: ""
		            }, {
		                mask: "##.###.###-#",
		                cc: "AD",
		                cd: "Andorra",
		                desc_en: "",
		                name_ru: "\u0410\u043d\u0434\u043e\u0440\u0440\u0430",
		                desc_ru: ""
		            } ]
        }
    }), Inputmask;
});
