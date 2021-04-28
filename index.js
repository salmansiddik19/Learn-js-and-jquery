$(document).ready(function () {
    $(".design").click(function () {
        if ($(this).hasClass("operand")) {   // add value of operand
            if ($("#expression").val() == 0) {
                $("#expression").val($(this).text())
            }
            else
                $("#expression").val($("#expression").val() + $(this).text())

        } else if ($(this).hasClass("operator")) {   // add value of operator
            $("#expression").val($("#expression").val() + $(this).text())

        } else if ($(this).hasClass("undo")) {     // undo(back)
            var value = $("#expression").val()
            if (value != "") {
                $("#expression").val(value.slice(0, -1))
            } else {
                $("#expression").val("0")
            }

        } else if ($(this).hasClass("clear")) {  // all clear
            $("#expression").val("0")

        }
    })

    // result
    $("#operation").click(function () {
        var result
        var expression
        try {
            result = (eval($("#expression").val()))
            expression = $("#expression").val()
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert("Error! Wrong expression...")
                $("#expression").val("0")
                $("#result").val("0")
            }
            if (e instanceof TypeError) {
                alert("Error! Wrong expression...")
                $("#expression").val("0")
                $("#result").val("0")
            }
        }

        // Append if the result is correct
        if ($("#hResult").val() == "") {
            $("#hResult").val(expression + "=" + result)
        } else {
            $("#hResult").val($("#hResult").val() + "\n" + expression + "=" + result)
        }
        $("#result").val(result)
        $("#expression").val("0")
    })
})