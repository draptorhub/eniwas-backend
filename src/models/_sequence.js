/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_sequence', {
		seq_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		seq_group: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		seq_pad: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		seq_val: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: '_sequence'
	});
};
