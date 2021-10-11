/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('referral_branch', {
		branchId: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true
		},
		reffId: {
			type: DataTypes.STRING(7),
			allowNull: true
		}
	}, {
		tableName: 'referral_branch'
	});
};
