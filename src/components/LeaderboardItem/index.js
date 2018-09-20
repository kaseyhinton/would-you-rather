import React from 'react';
import style from './index.css';
import '@material/card/dist/mdc.card.css';
import { Card, CardMedia } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

export default function (props) {
	return (
		<div>
		<Card outlined className={ style.card }>

			<CardMedia
				sixteenByNine
				style={{
					backgroundImage: `url('${props.user.avatarURL}')`
				}}
			/>
			<Typography use="headline3" tag="h3">
				{props.user.name}
     		 </Typography>

     		 <Typography use="body1" tag="p" theme="text-secondary-on-background">
				Answered Questions: {Object.values(props.user.answers).length}
     		 </Typography>

      		<Typography use="body1" tag="p" theme="text-secondary-on-background">
			  Created Questions: {Object.values(props.user.questions).length}
     		 </Typography>

			  <Typography use="body1" tag="p" theme="text-secondary-on-background">
			 Score: {props.user.score}
     		 </Typography>
		</Card>
		</div>
	);
}
