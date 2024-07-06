import { Header } from '@/components/auth/header';
import BackButton from '@/components/auth/back-button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
export default function ErrorCard() {
  return (
    <CardWrapper
      headerHeadline={'Authentication Error'}
      headerLabel={'Oops! Something went wrong'}
      backButtonLabel={'Back to login'}
      backButtonHref={'./auth/login'}
    >
      <div className={'w-full flex justify-center items-center'}>
        <ExclamationTriangleIcon
          className={'text-destructive'}
        ></ExclamationTriangleIcon>
      </div>
    </CardWrapper>
    // <Card className={'w-[400px] shadow-md'}>
    //   <CardHeader>
    //     <Header
    //       headline={'Authentication Error'}
    //       label={''}
    //     ></Header>
    //   </CardHeader>
    //   <CardFooter className={'flex justify-center items-center'}>
    //     <BackButton label={'Back to login'} href={'/auth/login'}></BackButton>
    //   </CardFooter>
    // </Card>
  );
}
