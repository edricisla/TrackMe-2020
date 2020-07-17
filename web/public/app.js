$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];


devices.forEach(function(device) {
    $('#devices tbody').append(`
    <tr>
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>`);
});

$('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = '/';
});

$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
});

users.forEach(function(user) {
    $('#users tbody').append(`
    <tr>
    <td>${user.user}</td>
    <td>${user.pwd}</td>
    <td>${user.confpwd}</td>
    </tr>`);
});

$('#register').on('click', function() {
    const user = $('#user').val();
    const pwd = $('#pwd').val();
    const confpwd = $('#confpwd').val();

    const exists = users.find(user => user.name === username);

    // if (user === exists) {
    //     alert('Error: User already exists');
    // }
    // if (exists !== 'undefined') {
    //     alert('Error: User already exists')
    // } 
    else if (exists === 'undefined') {
        alert('Try Again')
    } else if (exists === 'undefined' && pwd === confpwd) {
        users.push({ user, pwd });
        localStorage.setItem('users', JSON.stringify(users));
        location.href = '/login';
    }

});

$('#login').on('click', function() {
    const user = $('#user').val();
    const pwd = $('#pwd').val();

    const exists = users.find(user => user.name === username);
    const userpwd = users.find(user => user.pwd === userpwd);

    if (exists !== 'undefined' && pwd === userpwd) {
        localStorage.isAuthenticated = true;
        location.href = '/';
    } else if (exists === 'undefined' || pwd !== userpwd) {
        alert('Error: Try Again')
    }
});

const logout = () => {
    localStorage.removeItem('isAuthenticated');
    location.href = '/login';
}