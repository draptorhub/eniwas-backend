/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('service_branch', {
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true
		},
		serviceId: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		serviceCost: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'service_branch'
	});
};
