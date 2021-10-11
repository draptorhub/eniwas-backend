/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('checkout', {
		checkOutId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true
		},
		checkInId: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		codatetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		payMode: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		cototamt: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'checkout'
	});
};
