import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { CfnOutput } from '@aws-cdk/core';

export class BugStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'fn', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('./lib'),
      handler: 'bug-handler.handler',
    });

    new CfnOutput(this, 'output', {
      value: fn.functionName,
    });

    // The code that defines your stack goes here
  }
}
