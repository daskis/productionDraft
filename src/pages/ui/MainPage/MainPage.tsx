import { Button, ButtonBorderEnum, ButtonTypeEnum, Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const MainPage = () => {
    return (
        <div>
            <Text.Heading weight={WeightEnum.BOLD} className={'1224'} size={SizeEnum.H1}
                          color={ColorEnum.BLACK}>124</Text.Heading>
            <Text.Heading size={SizeEnum.H2} color={ColorEnum.BLACK}>124</Text.Heading>
            <Text.Heading size={SizeEnum.H3} color={ColorEnum.BLACK}>124</Text.Heading>
            <Text.Heading size={SizeEnum.H4} color={ColorEnum.BLACK}>124</Text.Heading>
            <Text.Heading size={SizeEnum.H5} color={ColorEnum.BLACK}>124</Text.Heading>
            <Text.Heading size={SizeEnum.H6} color={ColorEnum.BLACK}>124</Text.Heading>


            <Text.Paragraph size={SizeEnum.H1} color={ColorEnum.BLACK}>124</Text.Paragraph>
            <Text.Paragraph size={SizeEnum.H2} color={ColorEnum.BLACK}>124</Text.Paragraph>
            <Text.Paragraph size={SizeEnum.H3} color={ColorEnum.BLACK}>124</Text.Paragraph>
            <Text.Paragraph size={SizeEnum.H4} color={ColorEnum.BLACK}>124</Text.Paragraph>
            <Text.Paragraph size={SizeEnum.H5} color={ColorEnum.BLACK}>124</Text.Paragraph>
            <Text.Paragraph size={SizeEnum.H6} color={ColorEnum.BLACK}>124</Text.Paragraph>


            <Text.Link to={'124'} size={SizeEnum.H1}>124</Text.Link>
            <Text.Link to={'124'} size={SizeEnum.H2}>124</Text.Link>
            <Text.Link to={'124'} size={SizeEnum.H3}>124</Text.Link>
            <Text.Link to={'124'} size={SizeEnum.H4}>124</Text.Link>
            <Text.Link to={'124'} size={SizeEnum.H5}>124</Text.Link>
            <Text.Link to={'124'} size={SizeEnum.H6}>124</Text.Link>


            <Button size={SizeEnum.H1} border={ButtonBorderEnum.H6} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>
            <Button size={SizeEnum.H2} border={ButtonBorderEnum.H5} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>
            <Button size={SizeEnum.H3} border={ButtonBorderEnum.H4} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>
            <Button size={SizeEnum.H4} border={ButtonBorderEnum.H3} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>
            <Button size={SizeEnum.H5} border={ButtonBorderEnum.H2} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>
            <Button size={SizeEnum.H6} border={ButtonBorderEnum.H1} buttonType={ButtonTypeEnum.DEFAULT}>1e4dasdasdsa</Button>

        </div>
    );
};

