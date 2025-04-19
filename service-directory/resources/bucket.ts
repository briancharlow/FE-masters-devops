import pulumi from "@pulumi/pulumi";
import aws from "@pulumi/aws";


class pulumiBucket extends pulumi.ComponentResource {
    constructor(name, opts) {
        super("pkg:index:pulumiBucket", name, {}, opts);

        const b = new aws.s3.Bucket("b", {
            bucket: "my-tf-test-bucket",
            acl: aws.s3.CannedAcl.Private,
            tags: {
                Name: "My bucket",
                Environment: "Dev",
            },
        });
    }
}