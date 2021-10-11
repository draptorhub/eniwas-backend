/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('card_details', {
		transId: {
			type: DataTypes.STRING(25),
			allowNull: false,
			primaryKey: true
		},
		cardNumber: {
			type: DataTypes.STRING(25),
			allowNull: true
		}
	}, {
		tableName: 'card_details'
	});
};
