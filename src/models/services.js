/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('services', {
		servicesId: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		serviceName: {
			type: DataTypes.STRING(25),
			allowNull: true
		}
	}, {
		tableName: 'services'
	});
};
