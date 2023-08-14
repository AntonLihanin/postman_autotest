pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Отсутствует имя покемона(name)");
});
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(60);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text("name")).to.include("Sentinel-class landing craft");
});