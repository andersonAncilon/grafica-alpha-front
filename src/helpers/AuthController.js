export var IsLogged = false;

export const Authenticate = () => {
    IsLogged = true;
}

export const Logout = () => {
    IsLogged = false;
}