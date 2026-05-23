import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Reference.css';

type ReferenceProps = {
	name: string;
	url: string;
}

export function Reference({ name, url }: ReferenceProps) {
	return (
		<span>
			<a
				className='reference-link'
				href={url}
				target="_blank"
				rel="noopener noreferrer"

			>{name} <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} /> </a>
		</span>
	)
}