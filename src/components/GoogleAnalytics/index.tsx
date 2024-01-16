import Script from 'next/script';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const envIsDevelopment = process.env.NODE_ENV === 'development';
  const envHasMeasurementID = GA_MEASUREMENT_ID !== undefined;
  const shouldUseAnalytics = !envIsDevelopment && envHasMeasurementID;

  if (shouldUseAnalytics) {
    return (
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js? id=${GA_MEASUREMENT_ID}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `,
          }}
        ></Script>
      </>
    );
  }
}
