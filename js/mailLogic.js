var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
var Form = document.forms.contact
function mailsend(e) {
    e.preventDefault();
    var
    namee = Form.contactName.value,
    email = Form.contactAddress.value,
    subj = Form.contactSubject.value,
    msg = Form.contactMessage.value,
    sendBlock = document.getElementById('message_sent');

xmlhttp.send(JSON.stringify({
    'key': 'V0D_Zxz9tADoT1PJUBYXhQ',
    'message': {
        'from_email': 'Dinamicka@opinion.net',
        'to': [{ 'email': 'info@dinamicka.com', 'type': 'to' }],
        'autotext': 'true',
        'subject': 'Opinion',
        'html': '<head><style>td {padding: 3px;}</style></head><body><table border="1" style="border:1px solid black;border-collapse: collapse; overflow:auto;width:400px"><tr><td>Name</td><td>' + namee + '</td></tr><tr><td>Address</td><td>' + email + '</td></tr><tr><td>Subject</td><td>' + subj + '</td></tr><tr><td>Message</td><td>' + msg + '</td></tr></table></body>'

    }
}));
Form.contactName.value = '';
Form.contactAddress.value = '';
Form.contactSubject.value = '';
Form.contactMessage.value = '';
sendBlock.style.display = 'block';
//var async = setTimeout(function () {
//    sendBlock.style.opacity = '1';
//    var timer1 = setTimeout(function () {
//        sendBlock.opa
//    })
//}, 0);
$('#message_sent').show('slow');

}
Form.addEventListener('submit', mailsend, false);