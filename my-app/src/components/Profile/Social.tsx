import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

type Social = {
  facebook?: string;
  x?: string;
  instagram?: string;
};

const SocialAction = ({ facebook, x, instagram }: Social) => {
  return (
    <CardActions>
      {facebook && (
        <Button
          size='small'
          href={facebook}>
          <FacebookRoundedIcon />
        </Button>
      )}
      {x && (
        <Button
          size='small'
          href={x}>
          <XIcon />
        </Button>
      )}
      {instagram && (
        <Button
          size='small'
          href={instagram}>
          <InstagramIcon />
        </Button>
      )}
    </CardActions>
  );
};

export default SocialAction;
