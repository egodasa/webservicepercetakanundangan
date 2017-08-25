app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/contoh/daftarProduk.html"
    })
    .when("/form", {
        templateUrl : "/views/contoh/form.html"
    })
    .when("/artikel", {
        templateUrl : "/views/contoh/artikel.html"
    })
    .when("/list", {
        templateUrl : "/views/contoh/list.html"
    })
    .when("/detail", {
        templateUrl : "/views/contoh/detailProduk.html"
    })
    .when("/tabel", {
        templateUrl : "/views/contoh/tabel.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});
