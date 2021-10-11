/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('referrals', {
		reffId: {
			type: DataTypes.STRING(7),
			allowNull: false,
			primaryKey: true
		},
		reffName: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		refLogo: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'referrals'
	});
};
