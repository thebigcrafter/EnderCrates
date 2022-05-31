import "bulma/css/bulma.min.css";

const Error = ({ statusCode }: { statusCode: number }) => {
    return (
        <div className="hero">
            <div className="hero-body">
                <p className="title has-text-centered is-size-2 has-text-weight-light">
                    {statusCode}
                </p>
                <p className="title has-text-centered is-size-4 has-text-weight-light">
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : "An error occurred on client"}
                </p>
            </div>
        </div>
    );
}

export async function getStaticProps({ res, err }: { res: any; err: any }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        props: {
            statusCode,
        },
    };
}

export default Error;