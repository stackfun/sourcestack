"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendConfig = void 0;
const fs_1 = require("fs");
var BackendConfig;
(function (BackendConfig) {
    function init() {
        const filename = __dirname + '/backend-config.json';
        if (!fs_1.existsSync(filename)) {
            throw new Error(filename + ' not found. Please ensure that you have run "npm run publish-backend"');
        }
        let file = fs_1.readFileSync(filename);
        let config = JSON.parse(file.toString());
        BackendConfig.instance = config;
    }
    BackendConfig.init = init;
})(BackendConfig = exports.BackendConfig || (exports.BackendConfig = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZGNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2tlbmRjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQThDO0FBYTlDLElBQWlCLGFBQWEsQ0FjN0I7QUFkRCxXQUFpQixhQUFhO0lBSTFCLFNBQWdCLElBQUk7UUFDaEIsTUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsdUVBQXVFLENBQUMsQ0FBQTtTQUN0RztRQUNELElBQUksSUFBSSxHQUFHLGlCQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6QyxhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0lBUmUsa0JBQUksT0FRbkIsQ0FBQTtBQUVMLENBQUMsRUFkZ0IsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFjN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIGV4aXN0c1N5bmMgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZW5kQ29uZmlnIHtcblxuICAgIGFwcDogc3RyaW5nO1xuICAgIGVudjogc3RyaW5nO1xuICAgIFVzZXJQb29sSWQ6IHN0cmluZztcbiAgICBVc2VyUG9vbENsaWVudElkOiBzdHJpbmc7XG4gICAga2lkVG9QZW1zOiBhbnk7XG4gICAgRGF0YWJhc2VBcm46IHN0cmluZztcbiAgICBEYXRhYmFzZVNlY3JldEFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIEJhY2tlbmRDb25maWcge1xuICAgIFxuICAgIGV4cG9ydCBsZXQgaW5zdGFuY2U6IEJhY2tlbmRDb25maWc7XG4gICAgXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBfX2Rpcm5hbWUgKyAnL2JhY2tlbmQtY29uZmlnLmpzb24nO1xuICAgICAgICBpZiAoIWV4aXN0c1N5bmMoZmlsZW5hbWUpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihmaWxlbmFtZSArICcgbm90IGZvdW5kLiBQbGVhc2UgZW5zdXJlIHRoYXQgeW91IGhhdmUgcnVuIFwibnBtIHJ1biBwdWJsaXNoLWJhY2tlbmRcIicpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGUgPSByZWFkRmlsZVN5bmMoZmlsZW5hbWUpO1xuICAgICAgICBsZXQgY29uZmlnID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpO1xuICAgICAgICBCYWNrZW5kQ29uZmlnLmluc3RhbmNlID0gY29uZmlnO1xuICAgIH1cblxufVxuIl19