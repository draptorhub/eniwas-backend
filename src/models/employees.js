/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employees', {
		employeesId: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		employeeName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: true
		}
	}, {
		tableName: 'employees'
	});
};
