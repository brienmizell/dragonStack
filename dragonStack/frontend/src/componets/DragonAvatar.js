import React, { Componet } from 'react';

class DragonAvatar extends Componet {
	render() {
		const { generationId, dragonId, traits } = this.props.dragon;

		return (
			<div>
				<span>G{generationId}.</span>
				<span>I{dragonId}.</span>

				{traits.map((trait) => trait.traitValue).join(', ')}
			</div>
		);
	}
}

export default DragonAvatar;
