//发展历程
$(function() {
    jQuery(".event_box").slide({
        titCell: ".parHd li",
        mainCell: ".parBd",
        defaultPlay: false,
        titOnClassName: "act",
        prevCell: ".sPrev",
        nextCell: ".sNext"
    });
    jQuery(".parHd").slide({
        mainCell: " ul",
        vis: 8,
        effect: "leftLoop",
        defaultPlay: false,
        prevCell: ".sPrev",
        nextCell: ".sNext"
    })
});
//发展历程