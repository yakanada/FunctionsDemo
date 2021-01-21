module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    var message = 'Service Bus queue message created at ' + timeStamp;
    context.log(message);   
    context.bindings.outputSbMsg = [];
    context.bindings.outputSbMsg.push("1 " + message);
    context.bindings.outputSbMsg.push("2 " + message);
    context.done();
};