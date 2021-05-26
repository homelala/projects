module.exports = {
    isOwner:function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = `
         <a href="/auth/login">login</a> |
         <a href="/auth/register">register</a> |
         <a href="/auth/google">Login with google</a>
         `
        if (this.isOwner(request, response)) {
            authStatusUI = `${request.user.name} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}