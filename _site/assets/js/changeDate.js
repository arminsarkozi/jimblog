for (let i = 0; i < document.getElementsByClassName("post-content--data").length; i++) {
    for (let j = 0; j < document.getElementsByClassName("post-content--data")[i].getElementsByClassName("post-content--data--date").length; j++) {
        let text = document.getElementsByClassName("post-content--data")[i].getElementsByClassName("post-content--data--date")[j].innerText;
        let splittedText = text.split(" ");
        let month = splittedText[1];
        month = month.toLowerCase();
        month = month[0].toUpperCase() + month.substring(1, month.length);
        if (month == "Jan") {
            month = "január";
        } else if (month == "Feb") {
            month = "február";
        } else if (month == "Mar") {
            month = "március";
        } else if (month == "Apr") {
            month = "április";
        } else if (month == "May") {
            month = "május";
        } else if (month == "Jun") {
            month = "június";
        } else if (month == "Jul") {
            month = "július";
        } else if (month == "Aug") {
            month = "augusztus";
        } else if (month == "Sep") {
            month = "szeptember";
        } else if (month == "Oct") {
            month = "október";
        } else if (month == "Nov") {
            month = "november";
        } else if (month == "Dec") {
            month = "december";
        } else if (month == "January") {
            month = "január";
        } else if (month == "February") {
            month = "február";
        } else if (month == "March") {
            month = "március";
        } else if (month == "April") {
            month = "április";
        } else if (month == "May") {
            month = "május";
        } else if (month == "June") {
            month = "június";
        } else if (month == "July") {
            month = "július";
        } else if (month == "August") {
            month = "augusztus";
        } else if (month == "September") {
            month = "szeptember";
        } else if (month == "October") {
            month = "október";
        } else if (month == "November") {
            month = "november";
        } else if (month == "December") {
            month = "december";
        }
        let date = splittedText[2] + ". " + month + " " + splittedText[0] + ".";
        document.getElementsByClassName("post-content--data")[i].getElementsByClassName("post-content--data--date")[j].innerText = date;
    }
}

// document.getElementsByClassName("post-content--data")[0].getElementsByClassName("post-content--data--date")[0].innerText