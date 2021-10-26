<h1 align="center">vinv-schema</h1>

Lightweight open data exchange standard for individual tree based forest management, visualisation &amp; analytics.

This MIT-licensed data exchange format describes the syntax and semantics to describe forest inventory data and corresponding processes.

vinv allows sharing this information between software that supports `.vinv` files.

[![node ci](https://github.com/vinv-group/vinv-schema/actions/workflows/node_ci.yml/badge.svg?branch=main)](https://github.com/vinv-group/vinv-schema/actions/workflows/node_ci.yml)

| Version Code        | Status  | Documentation (tiny) | Documentation (named) | Documentation (openapi conform) |
| ------------- | ------------- | ----- | ----- |:-----:|
| 0.0.1-alpha.0      | alpha | [view](./docs/0.0.1-alpha.0/vinv.md) [example file](./0.0.1-alpha.0/example-files/vinv.json)   | [**view**](./docs/0.0.1-alpha.0/vinv-named.md) [example file](./0.0.1-alpha.0/named/example-files/vinv-named.json) | [view](./docs/0.0.1-alpha.0/vinv-named-openapi.md) [example file](./0.0.1-alpha.0/openapi/example-files/vinv-named-openapi.json)

- The **tiny** version is used for data transport.

- The **named** version is the most readable. It is especially useful in the frontend to write readable code. This is created from the tiny version.

- The **openapi conform** version can be used to create APIs from schema.

## Use

Find more information on [vinv.io](https://vinv.io)

## Stay In Touch & Questions

[Join our **Slack** Workspace](https://join.slack.com/t/vinv-space/shared_invite/zt-somm549g-OuITyP9Yuk3o2cadnUPxhA)

## License

[MIT](https://opensource.org/licenses/MIT)
