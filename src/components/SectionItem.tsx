import Typography from '@material-ui/core/Typography';

interface ISectionItem {
  title: string;
  subtitle?: string;
  contents?: string;
}

function SectionItem({ title, subtitle = '', contents = '' }: ISectionItem) {
  return (
    <div id='sectionItem'>
      <Typography variant="subtitle1" align='justify'>{title}</Typography>
      {
        subtitle === '' ? null : <Typography variant="body1" align='justify'>{subtitle}</Typography>
      }
      {
        contents === '' ? null : <Typography variant="body2" align='justify'>{contents}</Typography>
      }
    </div>
  );
}

export default SectionItem;
