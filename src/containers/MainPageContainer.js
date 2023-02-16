

const SERVER_URL = "http://localhost:8080"

useEffect(() => {
const fetchData = async() => {
    const response = await fetch(`${SERVER_URL}/users`)
    const data = await response.json();
    setAllAccounts(data);
}
fetchData()
    }, [])

useEffect(() => {
    const fetchData = async() => {
        const response = await fetch(`${SERVER_URL}/cycles`)
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
        }, [])

useEffect(() => {
    const fetchData = async() => {
        const response = await fetch(`${SERVER_URL}/articles`)
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
        }, [])

useEffect(() => {
    const fetchData = async() => {
        const response = await fetch(`${SERVER_URL}/comments`)
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
        }, [])


const postAccount = async (newAccount) => {
    const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newAccount)
    }) 
    const savedAccount = await response.json();
    savedAccount.users = [];
    setAllAccounts([...allAccounts, savedAccount])
    setIsLoggedIn(true)
    setAccount(savedAccount);
};


const logInToAnAccount = async (accountName, accountPassword) => {
    let check = false;
    for(const accountInList of allAccounts){
        if((accountInList.name===accountName)&(accountInList.password===accountPassword)){
            setAccount(accountInList);
            setIsLoggedIn(true)
            check= true;
        }
    }
    return check;
};

const ifLoggedIn = (element) => {
    if(isLoggedIn === true) {
        return element
    }
   
}

const ifLoggedOff = (element) => {
    if(isLoggedIn === false) {
        return element
    }
}